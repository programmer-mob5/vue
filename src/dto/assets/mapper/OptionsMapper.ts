import OptionsModel from '../model/OptionsModel';

function OptionsMapper(datas: { label: string; value: number }): OptionsModel {
  return  {
    name : datas.label,
    code : datas.value.toString()
  };
}

export default OptionsMapper;
