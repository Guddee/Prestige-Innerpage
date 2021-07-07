import {createClient} from 'contentful';
import HomePage from '../component/HomePage'
import { API_URL, GET_DATA_API } from '../config/ServerKey';

var res={};
export async  function getServerSideProps(){
  const client = createClient({
   space:process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_KEY,
  })
 res=await client.getEntries({content_type:'prestigeLakeRidge'})
  return {
    props:{
      articles:res.items
    }
  }
}
var projectId;
export default function Home({articles}) {
   projectId=articles[0].fields.projectId;
  return (
    <div>
        {articles.map((article,index)=>
      <HomePage key={index} article={article}/>
        )}
    </div>
  )
}
export async function getApi()  {
 const res = await fetch(API_URL+GET_DATA_API+projectId)
 const json = await res.json()
 return json.result
}
