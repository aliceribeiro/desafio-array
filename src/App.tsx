import { useState } from "react";
import "./App.css";
import { Box } from "./components/Box";
import { Matrix3x3 } from "./components/Matrix3x3";

const App = () => {
  const [data, setData] = useState<number[]>([]);

  const initialValues = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const listItemsOnTheFirstLine = (newData: number[]) => {
    if (initialValues.length > 0) {
      const firstLine = initialValues[0].map((number) => number);

      firstLine.forEach((l) => {
        newData.push(l);
      });
      initialValues.splice(0, 1);
    } else {
      console.log("Acabou o array");
    }
  };

  const getTheLastElementOfEachLine = (newData: number[]) => {
    for (let i = 0; i < initialValues.length; i++) {
      const array = initialValues[i].map((arr) => arr);
      const lastItem = array[array.length - 1];

      newData.push(lastItem);
      initialValues[i].pop();
    }
  };

  const getTheElementsOfTheArrayReturning = (newData: number[]) => {
    const totalLines = initialValues.length;
    const indexLastLine = totalLines - 1;
    const lastLine = initialValues[indexLastLine].reverse();

    lastLine.forEach((l) => {
      newData.push(l);
    });
    initialValues.pop();
  };

  const getTheFirstElementOfEachLine = (newData: number[]) => {
    for (let i = 0; i < initialValues.length; i++) {
      const array = initialValues[i].map((arr) => arr);
      const firstItem = array[0];

      newData.push(firstItem);
      initialValues[i].shift();
    }
  };

  const sentidoHorario = () => {
    const newData = [...data];

    listItemsOnTheFirstLine(newData);
    getTheLastElementOfEachLine(newData);
    getTheElementsOfTheArrayReturning(newData);
    getTheFirstElementOfEachLine(newData);
    listItemsOnTheFirstLine(newData);

    setData(newData);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Teste</h1> */}
        <button onClick={() => sentidoHorario()}>▶️</button>
        <Matrix3x3 />
        <div className="output">
          {data.map((item) => (
            <Box key={item} element={item} />
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
