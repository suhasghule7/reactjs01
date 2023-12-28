import ItemList from "./ItemList"

const Content = ({items, handleCheck, handleDelete}) => {
    return (
      <main>
        {items.length ? (
          <ItemList 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ) : (
          <p style={{marginTop: '2rem'}}>Your List is Empty.</p>
        ) }
      </main>
    )
// const [name, setName] = useState('Suhas');
// const [count, setCount] = useState(0);
    // const handleNameChange = () =>{
    //     const names = ['Bob', 'Kavin', 'Dave'];
    //     const int = Math.floor(Math.random() * 3);
    //     setName(names[int]);
    //   }

    //   const handleClick = () => {
    //     setCount(count + 1)
    //     setCount(count + 1)
    //     console.log(count);
    //   }
      
    //   const handleClick2 = (name) => {
    //     console.log(count);
    //   }

    //   const handleClick3 = (e) => {
    //     console.log(e.target.innerText)
    //   }

  // return (
  //   <main>
  //       <p onDoubleClick={handleClick}>
  //           Hello {name}!
  //       </p>
  //       <button onClick={handleNameChange}>Change Name</button>
  //       <button onClick={handleClick}>Click It</button>
  //       <button onClick={handleClick2}>Click It</button>
  //   </main>
  // )
}

export default Content