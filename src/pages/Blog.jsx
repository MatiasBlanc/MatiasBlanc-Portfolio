import Navbar from '../components/Navbar';
import ArticlePost from '../components/ArticlePost';
import DonationButton from '../components/DonationButton';
import PostCard from '../components/PostCard';

export default function Blog() {
	return (
		<>
			<Navbar />
			<ArticlePost />
			<main className='w-90 md:w-3/5 lg:w-90 mx-auto flex justify-center flex-wrap gap-4 lg:gap-10'>
				<PostCard />
			</main>
			<DonationButton />
		</>
	);
}
