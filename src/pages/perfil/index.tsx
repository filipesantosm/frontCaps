import DeleteAccountModal from '@/components/DeleteAccountModal/DeleteAccountModal';
import Input from '@/components/Input/Input';
import Layout from '@/components/Layout/Layout';
import PageTitle from '@/components/PageTitle/PageTitle';
import SuccessModal from '@/components/SuccessModal/SuccessModal';
import { theme } from '@/styles/theme';
import { useState } from 'react';
import {
  Column,
  ColumnTitle,
  DeleteAccountButton,
  PageContent,
  ProfileContainer,
  VerticalSeparator,
} from './styles';

const Profile = () => {
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <Layout>
      <PageContent>
        <PageTitle>Meu Perfil</PageTitle>

        <ProfileContainer>
          <Column>
            <ColumnTitle>Cadastro</ColumnTitle>
            <Input
              label="CPF"
              defaultValue="000.000.000-00"
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="NOME COMPLETO"
              defaultValue="NOME COMPLETO USUÁRIO"
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="DATA DE NASCIMENTO"
              defaultValue="01/01/2000"
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="E-MAIL"
              defaultValue="email@email.com"
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="TELEFONE"
              defaultValue="(00) 9 1234-5678"
              disabled
              containerClassName="profile-field"
            />
          </Column>

          <VerticalSeparator />

          <Column>
            <ColumnTitle>Endereço</ColumnTitle>
            <Input
              label="CEP"
              defaultValue="00000-000"
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="ESTADO"
              defaultValue="SÃO PAULO"
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="RUA"
              placeholder="NOME DA RUA"
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="NÚMERO"
              defaultValue="1234"
              disabled
              containerClassName="profile-field"
            />
            <Input
              label="CIDADE"
              defaultValue="SÃO PAULO"
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
        />
      )}
    </Layout>
  );
};

export default Profile;
