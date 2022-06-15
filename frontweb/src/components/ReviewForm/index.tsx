import { AxiosRequestConfig } from 'axios';
import ButtonIcon from 'components/ButtonIcon';
import { useForm } from 'react-hook-form';
import { Review } from 'types/review';
import { requestBackend } from 'util/requests';
import { toast } from 'react-toastify';

import './styles.css';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);
    console.log(formData);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        toast.success('Avaliação cadastrada com sucesso');
        setValue('text', '');
        onInsertReview(response.data);
      })
      .catch((error) => {
        toast.error('Erro ao salvar a avaliação do filme');
      });
  };

  return (
    <div className="review-details-container">
      <div className="base-card review-details-card">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                {...register('text', { required: 'Campo obrigatorio' })}
                type="text"
                className="form-control base-input"
                name="text"
                placeholder="Deixe sua avaliação aqui"
              />
              <div>{errors.text?.message}</div>
            </div>
            <div className="btn-avalia-content">
              <div className="btn-avalia">
                <ButtonIcon text="SALVAR AVALIAÇÃO" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
