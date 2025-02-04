import React, { useState } from "react";
import * as S from "./styles"; // Importando os estilos do arquivo styles.js

const InstallmentCalculator = () => {
  // States for inputs
  const [totalAmount, setTotalAmount] = useState("");
  const [installments, setInstallments] = useState("");
  const [interestRate, setInterestRate] = useState("");

  // States for results
  const [installmentList, setInstallmentList] = useState([]);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmountPaid, setTotalAmountPaid] = useState(0);

  // Function to calculate installments
  const calculateInstallments = () => {
    const totalAmountNum = parseFloat(totalAmount);
    const installmentsNum = parseInt(installments);
    const interestRateNum = parseFloat(interestRate) / 100;

    if (isNaN(totalAmountNum) || isNaN(installmentsNum) || isNaN(interestRateNum)) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    let remainingAmount = totalAmountNum;
    let totalInterestCalc = 0;
    let totalAmountPaidCalc = 0;
    const calculatedInstallments = [];

    for (let i = 1; i <= installmentsNum; i++) {
      const interest = remainingAmount * interestRateNum;
      const installmentValue = totalAmountNum / installmentsNum + interest;
      remainingAmount -= totalAmountNum / installmentsNum;
      totalInterestCalc += interest;
      totalAmountPaidCalc += installmentValue;

      calculatedInstallments.push({
        number: i,
        installmentValue: installmentValue.toFixed(2),
        interest: interest.toFixed(2),
        remainingAmount: remainingAmount.toFixed(2),
        isOpen: false, // To control the visibility of details
      });
    }

    setInstallmentList(calculatedInstallments);
    setTotalInterest(totalInterestCalc.toFixed(2));
    setTotalAmountPaid(totalAmountPaidCalc.toFixed(2));
  };

  // Function to copy the list of installments
  const copyInstallments = () => {
    const textToCopy = installmentList
      .map((installment) => `Parcela ${installment.number}: R$ ${installment.installmentValue}`)
      .join(", ");
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Lista de parcelas copiada com sucesso!");
      })
      .catch(() => {
        alert("Erro ao copiar a lista de parcelas.");
      });
  };

  // Function to toggle installment details
  const toggleInstallmentDetails = (index) => {
    const updatedInstallments = [...installmentList];
    updatedInstallments[index].isOpen = !updatedInstallments[index].isOpen;
    setInstallmentList(updatedInstallments);
  };

  return (
    <S.Container>
      <S.Title>Calculadora de Parcelas com Juros</S.Title>
      <S.InputGroup>
        <S.Label>
          Valor Total:
          <S.Input
            type="number"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            placeholder="Digite o valor total"
          />
        </S.Label>
        <S.Label>
          Número de Parcelas:
          <S.Input
            type="number"
            value={installments}
            onChange={(e) => setInstallments(e.target.value)}
            placeholder="Digite o número de parcelas"
          />
        </S.Label>
        <S.Label>
          Taxa de Juros (% ao mês):
          <S.Input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Digite a taxa de juros"
          />
        </S.Label>
      </S.InputGroup>
      <S.CalculateButton onClick={calculateInstallments}>Calcular</S.CalculateButton>

      {installmentList.length > 0 && (
        <S.ResultsContainer>
          <S.Subtitle>Detalhes das Parcelas:</S.Subtitle>
          {installmentList.map((installment, index) => (
            <S.InstallmentTab key={installment.number}>
              <S.InstallmentHeader onClick={() => toggleInstallmentDetails(index)}>
                <span>
                  Parcela {installment.number} - R$ {installment.installmentValue}
                </span>
                <span>{installment.isOpen ? "▲" : "▼"}</span>
              </S.InstallmentHeader>
              {installment.isOpen && (
                <S.InstallmentDetails>
                  <p>
                    <strong>Juros da Parcela:</strong> R$ {installment.interest}
                  </p>
                  <p>
                    <strong>Saldo Restante:</strong> R$ {installment.remainingAmount}
                  </p>
                </S.InstallmentDetails>
              )}
            </S.InstallmentTab>
          ))}
          <S.Summary>
            <S.Subtitle>Resumo:</S.Subtitle>
            <p>
              <strong>Total de Juros Pagos:</strong> R$ {totalInterest}
            </p>
            <p>
              <strong>Total de Parcelas Pagas:</strong> R$ {totalAmountPaid}
            </p>
          </S.Summary>
          <S.CopyButton onClick={copyInstallments}>Copiar Lista de Parcelas</S.CopyButton>
        </S.ResultsContainer>
      )}
    </S.Container>
  );
};

export default InstallmentCalculator;