# Login to Azure (Uncomment the next line if you need to login)
# Connect-AzAccount

# Variables
$resourceGroupName = "example-resources"
$location = "East US"
$vmName = "exampleVM"
$adminUsername = "azureuser"
$adminPassword = "P@ssw0rd123!" # Replace with a secure password
$vmSize = "Standard_B1s"
$imagePublisher = "Canonical"
$imageOffer = "UbuntuServer"
$imageSku = "18.04-LTS"

# Create a new resource group if it doesn't exist
$resourceGroup = Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue
if (-not $resourceGroup) {
    $resourceGroup = New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create a virtual network
$vnet = New-AzVirtualNetwork -ResourceGroupName $resourceGroupName `
                             -Location $location `
                             -Name "exampleVNet" `
                             -AddressPrefix "10.0.0.0/16"

# Create a subnet
$subnet = Add-AzVirtualNetworkSubnetConfig -Name "exampleSubnet" `
                                           -AddressPrefix "10.0.0.0/24" `
                                           -VirtualNetwork $vnet
$vnet | Set-AzVirtualNetwork

# Create a public IP address
$publicIp = New-AzPublicIpAddress -ResourceGroupName $resourceGroupName `
                                  -Location $location `
                                  -Name "examplePublicIP" `
                                  -AllocationMethod "Dynamic"

# Create a network security group
$nsg = New-AzNetworkSecurityGroup -ResourceGroupName $resourceGroupName `
                                   -Location $location `
                                   -Name "exampleNSG"

# Create a network interface
$nic = New-AzNetworkInterface -ResourceGroupName $resourceGroupName `
                               -Location $location `
                               -Name "exampleNIC" `
                               -SubnetId $vnet.Subnets[0].Id `
                               -PublicIpAddressId $publicIp.Id `
                               -NetworkSecurityGroupId $nsg.Id

# Create the virtual machine configuration
$vmConfig = New-AzVMConfig -VMName $vmName -VMSize $vmSize
$vmConfig = Set-AzVMOperatingSystem -VM $vmConfig `
                                     -Linux `
                                     -ComputerName $vmName `
                                     -Credential (New-Object PSCredential ($adminUsername, (ConvertTo-SecureString $adminPassword -AsPlainText -Force)))
$vmConfig = Set-AzVMSourceImage -VM $vmConfig `
                                -PublisherName $imagePublisher `
                                -Offer $imageOffer `
                                -Skus $imageSku `
                                -Version "latest"
$vmConfig = Add-AzVMNetworkInterface -VM $vmConfig -Id $nic.Id

# Create the virtual machine
New-AzVM -ResourceGroupName $resourceGroupName -Location $location -VM $vmConfig

# Output the virtual machine name
Write-Host "Virtual machine '$vmName' created successfully."