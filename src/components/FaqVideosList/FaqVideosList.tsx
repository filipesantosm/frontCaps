import { IFaqVideo } from '@/interfaces/Faq';
import { PaginatedResponse } from '@/interfaces/Paginated';
import api from '@/services/api';
import handleError from '@/utils/handleToast';
import { getEmbedFromYoutubeLink } from '@/utils/youtubeEmbed';
import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import {
  LoadMoreButton,
  VideoItem,
  VideoTitle,
  VideoWrapper,
  VideosContainer,
} from './styles';

const limit = 3;

const FaqVideosList = () => {
  const [videos, setVideos] = useState<IFaqVideo[]>([]);
  const [page, setPage] = useState(1);
  const [maximumPage, setMaximumPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getVideos();
  }, [page]);

  const getVideos = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get<PaginatedResponse<IFaqVideo>>(
        '/faq-videos',
        {
          params: {
            'pagination[pageSize]': limit,
            'pagination[page]': page,
          },
        },
      );

      setMaximumPage(data.meta.pagination.pageCount);

      if (page === 1) {
        setVideos(data.data);
      } else {
        setVideos(prev => [...prev, ...data.data]);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <VideosContainer>
        {videos.map(videoItem => (
          <VideoItem key={videoItem.id}>
            <VideoWrapper>
              <iframe
                src={getEmbedFromYoutubeLink(videoItem.attributes.url)}
                title={videoItem.attributes.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
              <VideoTitle>{videoItem.attributes.title}</VideoTitle>
            </VideoWrapper>
          </VideoItem>
        ))}
      </VideosContainer>

      {isLoading && <Loading />}

      {maximumPage > page && !isLoading && (
        <LoadMoreButton onClick={() => setPage(prev => prev + 1)}>
          Ver mais vídeos
        </LoadMoreButton>
      )}
    </>
  );
};

export default FaqVideosList;
