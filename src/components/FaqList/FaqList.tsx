/* eslint-disable react/no-array-index-key */
import { IFaq } from '@/interfaces/Faq';
import { PaginatedResponse } from '@/interfaces/Paginated';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import useDebounceWithCallback from '@/hooks/useDebounceWithCallback';
import {
  SectionTitle,
  List,
  Item,
  QuestionLink,
  ItemTitle,
  LoadMoreButton,
  MoreArticlesLink,
  QuestionList,
} from './styles';
import HelpSearchBar from '../HelpSearchBar/HelpSearchBar';
import Loading from '../Loading/Loading';

const limit = 9;

const FaqList = () => {
  const [faqs, setFaqs] = useState<IFaq[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = useDebounceWithCallback(search, () => setPage(1));

  useEffect(() => {
    getFaqs();
  }, [page, debouncedSearch]);

  const getFaqs = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get<PaginatedResponse<IFaq>>('/faqs', {
        params: {
          populate: '*',
          'pagination[pageSize]': limit,
          'pagination[page]': page,
          'filters[title][$containsi]': search || undefined,
        },
      });

      setMaximumPage(data.meta.pagination.pageCount);

      if (page === 1) {
        setFaqs(data.data);
      } else {
        setFaqs(prev => [...prev, ...data.data]);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <HelpSearchBar
        placeholder="Pesquise sua dúvida"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <SectionTitle>Consulte nosso F.A.Q (Perguntas frequentes)</SectionTitle>
      <List>
        {faqs.map(faq => (
          <Item key={faq.id}>
            <ItemTitle>{faq.attributes.title}</ItemTitle>
            <QuestionList>
              {faq.attributes?.faq_questions?.data?.map(faqQuestion => (
                <QuestionLink
                  key={faqQuestion.id}
                  href={`/ajuda/pergunta/${faqQuestion.id}`}
                >
                  {faqQuestion.attributes.question}
                </QuestionLink>
              ))}
            </QuestionList>
            <MoreArticlesLink href={`/ajuda/artigos/${faq.id}`}>
              Ver mais artigos <FaChevronRight />
            </MoreArticlesLink>
          </Item>
        ))}
      </List>

      {isLoading && <Loading />}

      {maximumPage > page && !isLoading && (
        <LoadMoreButton
          type="button"
          onClick={() => setPage(prev => prev + 1)}
          disabled={maximumPage > page}
        >
          Ver mais perguntas
        </LoadMoreButton>
      )}
    </>
  );
};

export default FaqList;
