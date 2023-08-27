export const TBody = ({ data, initialInvestment }) => {
  return (
    <tbody>
      {data.map((yearData) => {
        return (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>
              {yearData.savingsEndOfYear -
                initialInvestment -
                yearData.yearlyContribution * yearData.year}
            </td>
            <td>{initialInvestment + yearData.year}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
