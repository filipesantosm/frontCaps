import { ISignUpFormData } from '@/validations/SignUpSchemas';

export interface SignUpStepProps {
  onNext: (data?: Partial<ISignUpFormData>) => void;
  onClickLogin?: () => void;
  signUpFormData: ISignUpFormData;
}
