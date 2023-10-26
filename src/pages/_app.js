import '../styles/styles.scss';
import {PlainLayout} from "../layouts/plain";

const getDefaultLayout = (page) => (
  <PlainLayout>{page}</PlainLayout>
)

const App = ({Component, props}) =>{
  const getLayout = Component.getLayout ?? getDefaultLayout;
  
  return <>
    {getLayout(<Component {...props} />)}
  </>
}

export default App;