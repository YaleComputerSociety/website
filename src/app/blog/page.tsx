import { SectionTitle } from "@components/SectionTitle"
import add from "../../assets/people/addison.jpg"
import Image from "next/image"
import Link from "next/link"

interface Props {
  title : string 
  desc : string
  routeName : string
}

const POSTS = [
    {
      title : "test 1",
      desc : "test 2",
      postLink : undefined,
      routeName : ""
    },
    {
      title : "test 3",
      desc : "test 4",
      postLink : undefined,
      routeName : ""
    },
    {
    title : "test 5",
    desc : "test 6",
    postLink : undefined,
    routeName : ""
    },
]

export const postLinksByRoute = {
  "test" : "./postipynbs/test.ipynb"
}

export const BlogPostBlock = ({title, desc, routeName} : Props) => {

    return (
      <Link href={`/blog/${encodeURIComponent(routeName)}`}>
        <div className=" transition
        hover:scale-102"
        
        >
          <Image
            src={add}
            alt="ur mom"
            className="rounded-t-lg"
          >
          </Image>
          <div className="bg-ycs-pink 
                          opacity-85
                          rounded-b-lg
                          p-2
                          mb-5
                          lg:mb-0
                          md:mb-0
                        
                          "
                          
          >
            <div className="font-bold text-xl mb-2">{title}</div>
            {desc}
          </div>
        </div>
      </Link>
    )

}

export const Blog = () => {

  return (
    <div >
      <SectionTitle 
        title="Tech Blog"
        subtitle="Write-ups of engineering feats from the Society"
      />
          <div className="flex items-center justify-center mb-32">
            <span className="text-center text-2xl text-gray-500">Posts Coming Soon...</span>
          </div>

      <div className="mr-36 ml-36 flex flex-col lg:grid lg:gap-8 lg:grid-cols-3 drop-shadow-lg">
      
      {/* {
        POSTS.map((p) => {
          return  <BlogPostBlock 
          title={p.title}
          desc={p.desc}
          routeName={p.routeName}
        />
        })
      }
     */}
      </div>
    </div>
  )

}

export default Blog