import blogJson from '../json/Blog.json'

export default function PostCard() {
    return (
    <>
    { blogJson.map(data => (
      <article className="w-full lg:w-5/12 xl:w-1/4 p-4 bg-white-300 rounded-xl">
            <img className="w-full aspect-video font-bold rounded-xl" src={data.image} alt="" />
            <h2 className="font-rb text-dark text-3xl mt-6">{data.title}</h2>
            <ul className="flex card__category mt-3">
              <li>{data.category}</li>
            </ul>
            <section className="flex flex-col mt-6">
                <a className="card__btn bg-primary" href={data.url}>Seguir viendo</a>
            </section>
      </article>
    ))
    }
    </>
)
}  