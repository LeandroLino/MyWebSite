import React, { useState } from "react";
import { Input, Button, Card, Collapse, Typography, message } from "antd";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import "./styles.css"; // Importando o arquivo CSS

const { Title } = Typography;
const { Panel } = Collapse;

const InstallmentCalculator = () => {
  // States for inputs
  const [totalAmount, setTotalAmount] = useState("");
  const [installments, setInstallments] = useState("");
  const [interestRate, setInterestRate] = useState("");

  // States for results
  const [installmentList, setInstallmentList] = useState([]);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmountPaid, setTotalAmountPaid] = useState(0);
  const [isCopied, setIsCopied] = useState(false); // Estado para feedback do botão

  // Function to calculate installments
  const calculateInstallments = () => {
    const totalAmountNum = parseFloat(totalAmount);
    const installmentsNum = parseInt(installments);
    const interestRateNum = parseFloat(interestRate) / 100;

    if (isNaN(totalAmountNum) || isNaN(installmentsNum) || isNaN(interestRateNum)) {
      message.error("Por favor, preencha todos os campos corretamente.");
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
      .join("\n"); // Cada parcela em uma nova linha

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        message.success("Lista de parcelas copiada com sucesso!"); // Alerta no topo da página
        setIsCopied(true); // Ativa o feedback do botão
        setTimeout(() => setIsCopied(false), 2000); // Desativa após 2 segundos
      })
      .catch(() => {
        message.error("Erro ao copiar a lista de parcelas.");
      });
  };

  return (
    <div className="container">
      <Title level={2} style={{ textAlign: "center", marginTop: "100px", marginBottom: "24px" }}>
        Calculadora de Parcelas com Juros
      </Title>

      <Card style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Input
          type="number"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
          placeholder="Valor Total"
          style={{ marginBottom: "16px" }}
        />
        <Input
          type="number"
          value={installments}
          onChange={(e) => setInstallments(e.target.value)}
          placeholder="Número de Parcelas"
          style={{ marginBottom: "16px" }}
        />
        <Input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Taxa de Juros (% ao mês)"
          style={{ marginBottom: "16px" }}
        />
        <Button
          type="primary"
          block
          onClick={calculateInstallments}
          style={{ backgroundColor: "#fcba03", borderColor: "#fcba03" }}
        >
          Calcular
        </Button>
      </Card>

      {installmentList.length > 0 && (
        <Card style={{ maxWidth: "600px", margin: "24px auto" }}>
          <Title level={4}>Detalhes das Parcelas:</Title>
          <Collapse accordion>
            {installmentList.map((installment, index) => (
              <Panel
                header={`Parcela ${installment.number} - R$ ${installment.installmentValue}`}
                key={index + 1}
                style={{ borderColor: "#fcba03" }}
              >
                <p>
                  <strong>Juros da Parcela:</strong> R$ {installment.interest}
                </p>
                <p>
                  <strong>Saldo Restante:</strong> R$ {installment.remainingAmount}
                </p>
              </Panel>
            ))}
          </Collapse>

          <div style={{ marginTop: "24px" }}>
            <Title level={4}>Resumo:</Title>
            <p>
              <strong>Total de Juros Pagos:</strong> R$ {totalInterest}
            </p>
            <p>
              <strong>Total de Parcelas Pagas:</strong> R$ {totalAmountPaid}
            </p>
          </div>

          <Button
            type={isCopied ? "default" : "primary"}
            icon={isCopied ? <CheckOutlined /> : <CopyOutlined />}
            block
            onClick={copyInstallments}
            style={{
              marginTop: "16px",
              backgroundColor: isCopied ? "#f0f2f5" : "#fcba03",
              borderColor: isCopied ? "#d9d9d9" : "#fcba03",
              color: isCopied ? "rgba(0, 0, 0, 0.85)" : "white",
            }}
          >
            {isCopied ? "Copiado!" : "Copiar Lista de Parcelas"}
          </Button>
        </Card>
      )}
    </div>
  );
};

export default InstallmentCalculator;