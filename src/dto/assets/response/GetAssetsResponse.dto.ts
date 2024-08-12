export default interface GetAssetsResponse {
  data: Data;
}
interface Data {
  totalRecords: number;
  data: Asset[];
}

interface Asset {
  _id: string;
  name: AssetName;
  tagType: string;
  status: string;
  category: AssetCategory;
  group: AssetGroup;
  brand: AssetBrand;
  model: AssetModel;
  policy: string;
  transactions: AssetTransactions;
  addOn: AssetAddOn;
  parent: null | string; // Assuming parent can be null or string; adjust if necessary
  updatedAt: string; // ISO 8601 date string
  setDefault: string;
  manager: AssetPermissions;
  staff: AssetPermissions;
  hasSystemRole: SystemRoles;
  hasLinked: boolean;
  assetImageSmall: string | null;
  assetImageMedium: string | null;
  assetImageBig: string | null;
  maintenanceStatus: string | null;
  auditStatus: string | null;
  rfid: boolean;
  qr: boolean;
}

interface AssetName {
  _id: string;
  nameWithSequence: string;
  name: string;
  key: number;
  aliasCode: string;
}

interface AssetCategory {
  _id: string;
  name: string;
  key: number;
  fullPath: string;
}

interface AssetGroup {
  _id: string;
  name: string;
  fullPath: string;
  key: number;
}

interface AssetBrand {
  _id: string;
  name: string;
  key: number;
}

interface AssetModel {
  _id: string;
  name: string;
  key: number;
}

interface AssetTransactions {
  borrowing: boolean;
  transfer: boolean;
  disposal: boolean;
  audit: boolean;
  maintenance: boolean;
  tracking: boolean;
  repairTicketing: boolean;
}

interface AssetAddOn {
  repairTicketing: boolean;
  maintenance: boolean;
  tracking: boolean;
  audit: boolean;
}

interface AssetPermissions {
  borrowing: boolean;
  transfer: boolean;
  disposal: boolean;
  audit: boolean;
  repair: boolean;
  maintenance: boolean;
  addOn: boolean;
}

interface SystemRoles {
  purchaseInformation: RolePermissions;
  tag: RolePermissions;
  registerAsset: RolePermissions;
  purchaseDocument: RolePermissions;
  depreciationGroup: RolePermissions;
  depreciationMethod: RolePermissions;
}

interface RolePermissions {
  create: boolean;
  view: boolean;
  delete: boolean;
  update: boolean;
}
