import React from 'react';
import EvaluationQuestionnaire from './EvaluationQuestionnaire';

interface EvaluationFormProps {
  onClose?: () => void;
}

const EvaluationForm: React.FC<EvaluationFormProps> = ({ onClose }) => {
  return <EvaluationQuestionnaire onClose={onClose} />;
};

export default EvaluationForm;
