export default interface GetAssetsOptionsResponse {
  data: Data;
}

interface Data {
  status: number; 
  message: string;
  data: AssetOptionsData;
}

interface AssetOptionsData {
  brandOptions: Option[];
  nameOptions: Option[];
  modelOptions: Option[];
  statusOptions: Option[];
}

interface Option {
  label: string;
  value: number;
}
