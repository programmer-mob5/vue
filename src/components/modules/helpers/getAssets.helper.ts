import AssetsServices from '@/services/assets.service';

const getAssets = async () => {
  try {
    const { data } = await AssetsServices.getAssets();
    return data;
  } catch (error) {
    return false;
  }
};

export default getAssets;
