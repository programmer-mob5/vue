import AssetModel from '../model/AssetsModel';
import GetAssetsResponse from '../response/GetAssetsResponse.dto';

export default function AssetsMapper(datas: GetAssetsResponse): AssetModel[] {
  return datas.data.data.map((data) => {
    return {
      brand: data.brand.name,
      assetsName: data.name.nameWithSequence,
      aliasName: data.name.name,
      category: data.category.name,
      groupName: data.group.name,
      moderOrType: data.model.name,
    };
  });
}
