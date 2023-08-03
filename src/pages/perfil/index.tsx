import DeleteAccountModal from '@/components/DeleteAccountModal/DeleteAccountModal';
import Input from '@/components/Input/Input';
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
import SuccessModal from '@/components/SuccessModal/SuccessModal';
import { theme } from '@/styles/theme';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { format, parseISO } from 'date-fns';
import { useRouter } from 'next/router';
import {
  Column,
  ColumnTitle,
  DeleteAccountButton,
  PageContent,
  ProfileContainer,
  VerticalSeparator,
} from './styles';

const Profile = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleDeleteAccountSuccess = () => {
    logout();
    router.push('/');
  };

  return (
    <Layout>
      <PageContent>
        <PageTitle>Meu Perfil</PageTitle>

        <ProfileContainer>
          <Column>
            <ColumnTitle>Cadastro</ColumnTitle>
            <Input
              label="CPF"
              defaultValue={user?.cpf || ''}
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="NOME COMPLETO"
              defaultValue={user?.name || ''}
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="DATA DE NASCIMENTO"
              defaultValue={
                user?.dateBirth
                  ? format(parseISO(user.dateBirth), 'dd/MM/yyyy')
                  : ''
              }
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="E-MAIL"
              defaultValue={user.email}
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="TELEFONE"
              defaultValue={user?.phone || ''}
              disabled
              containerClassName="profile-field"
            />
          </Column>

          <VerticalSeparator />

          <Column>
            <ColumnTitle>Endereço</ColumnTitle>
            <Input
              label="CEP"
              defaultValue={user?.cep || ''}
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="ESTADO"
              defaultValue={user?.state || ''}
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="RUA"
              defaultValue={user?.street || ''}
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="NÚMERO"
              defaultValue={user?.number || ''}
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="CIDADE"
              defaultValue={user?.city || ''}
              disabled
              containerClassName="profile-field"
            />
          </Column>
        </ProfileContainer>

        <DeleteAccountButton
          type="button"
          onClick={() => setShowDeleteAccountModal(true)}
        >
          Excluir conta
        </DeleteAccountButton>
      </PageContent>
      {showDeleteAccountModal && (
        <DeleteAccountModal
          onClose={() => setShowDeleteAccountModal(false)}
          onSuccess={() => {
            setShowDeleteAccountModal(false);
            setShowSuccessModal(true);
          }}
        />
      )}
      {showSuccessModal && (
        <SuccessModal
          onClose={() => setShowSuccessModal(false)}
          message="Sua conta foi excluída"
          iconColor={theme.colors.primary}
          onContinue={handleDeleteAccountSuccess}
        />
      )}
    </Layout>
  );
};

export default Profile;
