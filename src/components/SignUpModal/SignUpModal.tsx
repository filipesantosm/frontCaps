import handleError, { handleSuccess } from '@/utils/handleToast';
import { ISignUpFormData } from '@/validations/SignUpSchemas';
import { useState } from 'react';
import {
  IoChevronBackCircleOutline,
  IoCloseCircleOutline,
} from 'react-icons/io5';
import api from '@/services/api';
import AddressStep from './steps/AddressStep/AddressStep';
import CpfStep from './steps/CpfStep/CpfStep';
import PasswordStep from './steps/PasswordStep/PasswordStep';
import PersonalDetailsStep from './steps/PersonalDetailsStep/PersonalDetailsStep';
import TermsStep from './steps/TermsStep/TermsStep';
import {
  BackButton,
  CloseButton,
  Container,
  Content,
  ModalTitle,
} from './styles';

interface Props {
  onClose: () => void;
  onClickLogin: () => void;
}

const formStepTitles = [
  'Bem vindo(a)',
  'Cadastre-se',
  'Endereço',
  'Defina sua senha',
  'Termos de uso e política de privacidade',
];

const LAST_STEP = 4;

const SignUpModal = ({ onClose, onClickLogin }: Props) => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({} as ISignUpFormData);

  const handleSubmit = async (finalForm: ISignUpFormData) => {
    try {
      const payload = {
        ...finalForm,
        username: finalForm.cpf,
        confirm_password: undefined,
      };

      await api.post('/auth/local/register', payload);

      handleSuccess('Cadastrado com sucesso!');
      onClickLogin();
    } catch (error) {
      handleError(error);
    }
  };

  const handleNextStep = (partialForm?: Partial<ISignUpFormData>) => {
    if (step === LAST_STEP) {
      handleSubmit({
        ...form,
        ...partialForm,
      });
      return;
    }

    setStep(prev => prev + 1);
    setForm(prev => ({
      ...prev,
      ...partialForm,
    }));
  };

  const handlePreviousStep = () => {
    if (step === 0) {
      onClose();
      return;
    }

    setStep(prev => prev - 1);
  };

  const commonProps = {
    onNext: handleNextStep,
    signUpFormData: form,
    onClickLogin,
  };

  const stepComponents = [
    <CpfStep key="cpfStep" {...commonProps} />,
    <PersonalDetailsStep key="personalDetailsStep" {...commonProps} />,
    <AddressStep key="addressStep" {...commonProps} />,
    <PasswordStep key="passwordStep" {...commonProps} />,
    <TermsStep key="termsStep" {...commonProps} />,
  ];

  return (
    <Container>
      <Content isTermsStep={step === LAST_STEP}>
        {step > 0 && (
          <BackButton type="button" onClick={handlePreviousStep}>
            <IoChevronBackCircleOutline />
          </BackButton>
        )}
        <ModalTitle>{formStepTitles[step]}</ModalTitle>
        {step === 0 && (
          <CloseButton type="button" onClick={onClose}>
            <IoCloseCircleOutline />
          </CloseButton>
        )}
        {stepComponents[step] || null}
      </Content>
    </Container>
  );
};

export default SignUpModal;
