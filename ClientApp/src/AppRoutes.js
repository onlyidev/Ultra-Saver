import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { HelloWorld } from "./components/HelloWorld";
import SimpleDataTest from "./components/SimpleDataTest";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/fetch-data",
    element: <FetchData />,
  },
  {
    path: "/helloworld",
    element: <HelloWorld />,
  },
  {
    path: "/show/simpledatatest",
    element: <SimpleDataTest />,
  },
];

export default AppRoutes;
