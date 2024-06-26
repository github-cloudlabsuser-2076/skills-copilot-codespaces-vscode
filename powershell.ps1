# Login to Azure (Uncomment the next line if you need to login)
# Connect-AzAccount

# Variables
$resourceGroupName = "example-resources"
$location = "East US"
$storageAccountName = "examplestorageaccount$(Get-Random)"
$storageSkuName = "Standard_LRS"

# Create a new resource group if it doesn't exist
$resourceGroup = Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue
if (-not $resourceGroup) {
    $resourceGroup = New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create the storage account
$storageAccount = New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                                       -Name $storageAccountName `
                                       -Location $location `
                                       -SkuName $storageSkuName `
                                       -Kind "StorageV2" `
                                       -AccessTier "Hot"

# Output the storage account name
Write-Host "Storage account '$($storageAccount.StorageAccountName)' created successfully."