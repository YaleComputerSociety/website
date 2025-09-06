import { SectionContainer } from '@components/Container';
import {
  GoArrowUpRight
} from 'react-icons/go';
import Link from 'next/link';

export const BlogForm: React.FC = () => {
  return (
    <SectionContainer className="mt-32">
      <div className="bg-gradient-to-r from-ycs-pink/20 to-transparent p-6 rounded-lg border-l-4 border-ycs-pink mb-12">
            <div className="flex items-center">
              <div className='mr-2'>
                <h3 className="text-xl font-bold text-white">Have something to share?</h3>
                <p className="text-zinc-300 mt-1">
                  Visit our Google Form to post an article to the y/cs Blog and get promoted on our LinkedIn/newsletter
                </p>
              </div>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSc46uNjX9D740qMhL1EzoKsr2PHIDO65xYe7PrmtFFEO_fiCA/viewform?usp=dialog"
                className="ml-auto bg-ycs-pink hover:bg-ycs-pink/90 text-black py-2 px-6 rounded-lg transition-all duration-300 flex items-center whitespace-nowrap"
                target="_blank"
              >
                Make a post
                <GoArrowUpRight className="ml-2" />
              </Link>
            </div>
          </div>
    </SectionContainer>
  )
}

