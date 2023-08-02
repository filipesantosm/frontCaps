import Layout from '@/components/Layout/Layout';
import NextRaffle from '@/components/NextRaffle/NextRaffle';
import { Banner, PageContent, RulesSection, Text, Title } from './styles';

const Rules = () => {
  return (
    <Layout>
      <Banner src="/home-hero.png" />
      <PageContent>
        <NextRaffle />
        <RulesSection>
          <Title>Regulamentos</Title>
          <Text>
            {`
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nunc finibus arcu efficitur scelerisque. Cras quis pretium erat. In eu nisl et velit ullamcorper maximus in eu mauris. Cras eget mollis nunc, quis pretium erat. Pellentesque risus nisi, congue id quam ut, dapibus vehicula dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut quis fermentum libero. Aenean ut imperdiet purus. Sed maximus maximus magna ut scelerisque. Aliquam eu posuere ante. Quisque ullamcorper bibendum scelerisque. Mauris blandit varius laoreet. Maecenas ac aliquet enim, non iaculis risus. Nullam ut arcu non erat lacinia rhoncus. Morbi volutpat ut nunc nec lacinia.

              Pellentesque efficitur placerat eros sed rutrum. Etiam tempor venenatis arcu ut vestibulum. Ut aliquet diam et venenatis finibus. Suspendisse euismod id odio sit amet efficitur. Nunc lorem nunc, tincidunt quis est in, ornare varius eros. Ut congue, ex id finibus dictum, nisl turpis dapibus lacus, sit amet tincidunt felis est sodales diam. Morbi at ipsum magna. In hac habitasse platea dictumst.

              Nunc et elementum purus, quis laoreet lorem. Nulla dapibus arcu et ante ultricies tempor. Fusce eu mi diam. Integer pharetra elit nec aliquam tincidunt. Aliquam congue lorem vel fringilla rhoncus. Quisque blandit nisi velit, id blandit purus venenatis at. Ut lectus turpis, porttitor eget arcu sit amet, congue mattis lacus. Pellentesque ultrices hendrerit ex non varius. Aliquam lorem leo, iaculis at pellentesque vel, suscipit a nisl. Nullam malesuada mattis quam pulvinar hendrerit. Morbi magna nibh, consectetur eu maximus quis, dictum nec velit. Aenean purus arcu, scelerisque sed eleifend vel, semper quis ante.

              Sed auctor, elit non tempus placerat, dui felis sodales est, et consectetur nunc risus at ex. Nam vestibulum elementum lacinia. Phasellus lacinia ut mauris id ornare. Maecenas egestas fringilla cursus. Vivamus vitae metus tristique, auctor felis vitae, mollis tellus. Vivamus rhoncus vel nisl eget ultrices. Proin maximus elit nulla. Nunc fringilla tellus ut enim efficitur, vitae condimentum velit interdum. Donec bibendum tellus non tortor dictum auctor. Donec eget condimentum nunc. Ut feugiat quam purus, sed faucibus est ultrices at. Donec id ullamcorper erat, sit amet imperdiet mauris. Sed id orci cursus, congue diam ut, feugiat erat. Praesent quis porttitor tortor.
            `}
          </Text>
        </RulesSection>
      </PageContent>
    </Layout>
  );
};

export default Rules;
