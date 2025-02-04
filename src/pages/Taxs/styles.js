import styled from "styled-components";

// Container principal
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
`;

// Título
export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

// Grupo de inputs
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
`;

// Label
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 16px;
`;

// Input
export const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

// Botão de calcular
export const CalculateButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
`;

// Container de resultados
export const ResultsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
`;

// Subtítulo
export const Subtitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

// Aba de parcela
export const InstallmentTab = styled.div`
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
`;

// Cabeçalho da aba de parcela
export const InstallmentHeader = styled.div`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

// Detalhes da parcela
export const InstallmentDetails = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
`;

// Resumo
export const Summary = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

// Botão de copiar
export const CopyButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
`;