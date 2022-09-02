import BlogList from "./BlogList";
import useFetch from "./useFetch";

// import { InputText } from "primereact/inputtext";
// import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
// import "primereact/resources/primereact.min.css"; //core css
// import "primeicons/primeicons.css"; //icons

const Home = () => {
  // const [text, setText] = useState();
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading.... </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

      {/* <InputText value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text}</p> */}
    </div>
  );
};

export default Home;
