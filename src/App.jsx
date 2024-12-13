import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import NestedList from './Nested_list';

function App() {
  const items = [
    {
      id: 1,
      name: "Parent 1",
      children: [
        {
          id: 2,
          name: "Child 1",
          children: [
            {
              id: 3,
              name: "Grandchild 1",
            },
            {
              id: 4,
              name: "Grandchild 2",
            },
          ],
        },
        {
          id: 5,
          name: "Child 2",
        },
      ],
    },
    {
      id: 6,
      name: "Parent 2",
    },
  ];

  function handleClick(item) {
    console.log(item);
  }

  return (
    <div className="App">
      <NestedList items={items} onClick={handleClick} />
    </div>
  );
}

export default App;
