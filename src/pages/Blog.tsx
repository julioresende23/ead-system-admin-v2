import Wrapper from '../layouts/Wrapper';
import BlogTwoMain from '../components/blogs/blog-two';
import SEO from '../components/SEO';

const Blog = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'SkillGro Blog Two'} />
         <BlogTwoMain />
      </Wrapper>
   );
};

export default Blog;