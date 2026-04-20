const ItemCategories = (props) => {
  const {resCategory} = props;
  const data = resCategory?.card?.info;
  console.log(resCategory.info);
  return (
    <div className="h-40">  
      <span className="font-semibold" >{data.name}</span>
       <h4 className="mt-5">Description</h4>
       <div>{data.description}</div>
      <hr />
    </div>
  );
};

export default ItemCategories;
