import Head from 'next/head'
import Image from 'next/image'
import {createClient} from 'contentful';
import HomePage from '../component/HomePage'

export async  function getStaticProps()
{
  const client = createClient({
   space:"fo2bfrw08w1u",
    accessToken:"IhKu8CAgf6PpJbjkXkllPKIPbKDAJzJL4FzYJZlWO0w",
  })
  const res=await client.getEntries({content_type:'prestigeSongOfSouthBangalore'})
  return {
    props:{
      articles:res.items
    }
  }
}

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      {articles.map((article,index)=>
      <HomePage key={index} article={article} />
      
    )}
    </div>
  )
}
