import { ISignUpFormData } from '@/validations/SignUpSchemas';

export interface SignUpStepProps {
  onNext: (data?: Partial<ISignUpFormData>) => void;
  onClickLogin?: () => void;
  signUpFormData: ISignUpFormData;
  isSubmitting?: boolean;
}

export interface CpfValidatorResponse {
  cpf: string;
  dateBirth: string; // dd/MM/yyyy
  name: string;
}
