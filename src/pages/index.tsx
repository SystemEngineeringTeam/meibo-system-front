import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { useAtom } from 'jotai';
import { type ReactElement } from 'react';
import styled from 'styled-components';
import { countAtom } from '@/utils/stores/counter';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  place-content: center;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
`;

const IndexPage = (): ReactElement => {
const [count, setCount] = useAtom(countAtom);
    const a = 123;

  return (
    <Container>
      <Flex align="center" gap="1rem" vertical>
        <Title>Hello Vite + React SWC + React Router + styled-components + jotai + Antd!</Title>
        <p>Count: {count}</p>
        <Flex gap="0.5rem">
          <Button
            icon={<ReloadOutlined />}
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </Button>
          <Button
            icon={<PlusOutlined />}
            onClick={() => {
              setCount((_prev) => _prev + 1);
            }}
            type="primary"
          >
            Increment
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default IndexPage;
