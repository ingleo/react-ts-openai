export interface CompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choices[];
  usage: Usage;
}

interface Choices {
  index: number;
  message: Message;
  finish_reason: string;
}

interface Message {
  role: string;
  content: string;
}

interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}
