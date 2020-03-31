const localStorageKeyName = 'tagList';
type Tag = {
  id: string;
  name: string;
}

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'name is duplicated'; // success 表示成功， duplicated 表示name重复
  save: () => void;
}

const tagListModel: TagListModel = {
  data:[],
  fetch(){
    this.data= JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data
  },
  create(name: string){
    const names = this.data.map(item=>item.name);
    if(names.indexOf(name)>=0){ return 'name is duplicated'}
   this.data.push({id:name, name: name});
   this.save();
   return 'success'
  },
  save(){
    window.localStorage.setItem('localStorageKeyName', JSON.stringify(this.data));
  }
};

export default tagListModel