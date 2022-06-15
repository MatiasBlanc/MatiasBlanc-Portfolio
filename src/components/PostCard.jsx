import blogJson from '../json/Blog.json'

export default function PostCard() {
    return (
    <>
    { blogJson.map(data => (
      <article className="w-full lg:w-5/12 xl:w-1/4 p-4 bg-white-300 dark:bg-secondaryDark rounded-xl">
        <a href={data.url}>
          <img className="w-full aspect-video font-bold rounded-xl" src={data.image} alt="" />
          <h2 className="font-rb text-dark dark:text-white-200 text-3xl mt-6">{data.title}</h2>
          <ul className="flex card__category mt-3">
            <li>{data.category}</li>
          </ul>
        </a>
      </article>
    ))
    }
    </>
)
}  