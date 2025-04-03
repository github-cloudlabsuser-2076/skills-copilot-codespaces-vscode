# Configure the Azure provider
provider "azurerm" {
  features {}
}

# Create a resource group
resource "azurerm_resource_group" "rg" {
  name     = "example-resources"
  location = "East US"
}

# Create a storage account
resource "azurerm_storage_account" "sa" {
  name                     = "examplestorageaccount"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

# Output the primary access key of the storage account
output "storage_account_primary_access_key" {
  value = azurerm_storage_account.sa.primary_access_key
}