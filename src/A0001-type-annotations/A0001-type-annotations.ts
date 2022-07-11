const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
objetoA.chaveA = 'Outro valor';
objetoA.chaveB = 'New key';
objetoA.chaveC = 'New key value';
