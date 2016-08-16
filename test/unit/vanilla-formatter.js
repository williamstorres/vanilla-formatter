import vanillaFormatter from '../../src/vanilla-formatter';

describe('vanillaFormatter', () => {
  describe('fromatear numero', () => {
    it ('formatear numero 1000 a 1.000', () => {
      expect(vanillaFormatter.format(1000, '#.###', true)).to.equal('1.000');
    });

    it ('formatear numero 1000000 a 1.000.000', () => {
      expect(vanillaFormatter.format(1000000, '000.000.000.000.000', true)).to.equal('1.000.000');
    });

    it ('formatear numero 1000000 a 1.000.000,00', () => {
      expect(vanillaFormatter.format('100000011', '000.000.000.000.000,00', true)).to.equal('1.000.000,11');
    });
  });

  describe('format rut', () => {
    it ('rut 1-9', () => {
      expect(vanillaFormatter.format('19', '00.000.000-A', true)).to.equal('1-9');
    });

    it ('rut 1-k', () => {
        expect(vanillaFormatter.format('1k', '00.000.000-A', true)).to.equal('1-k');
    });

    it ('rut completo 17.305.751-2', () => {
        expect(vanillaFormatter.format('173057512', '00.000.000-A', true)).to.equal('17.305.751-2');
    });
  });

  describe('clean rut', () => {
    it ('rut 19', () => {
      expect(vanillaFormatter.getClean('1-9', '00.000.000-A', true)).to.equal('19');
    });

    it ('rut 1k', () => {
      expect(vanillaFormatter.getClean('1-k', '00.000.000-A', true)).to.equal('1k');
    });

    it ('rut completo 173057512', () => {
      expect(vanillaFormatter.getClean('17.305.751-2', '00.000.000-A', true)).to.equal('173057512');
    });
  });
});
