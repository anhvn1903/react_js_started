const MyComponent = () => {
    const var1 = "child";
    // const hoidanit = undefined;
    const hoidanit = {
        name: "hoidanit",
        age: 25
    } 
    // const hoidanit = [1,2,3];

    return (
        <>
            <div>{JSON.stringify(hoidanit)} & holiday</div>
            <div className="child" style={{borderRadius: "10px"}}>child</div>
            <div>{console.log("Eric")}</div>
        </>
      
    )
  }
  export default MyComponent;