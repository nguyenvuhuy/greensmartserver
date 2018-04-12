module.exports.Model = {
  RAIN: {
    title: 'Co Mua!',
    subject: '',
    content: '',
  },
  TEMPERATURE: {
    title: 'Nhiet do!',
    subject: '',
    content: '',
  },
  HUMIDITY: {
    title: 'Do am!',
    subject: '',
    content: '',
  },
  COMMON: (agricultural) => {
    const content = `Thời tiết không phù hợp, bạn nên chú ý đến một số sản phẩm sau: ${agricultural.toString()}`
    return {
      title: 'Thời tiết không phù hợp',
      subject: 'Thời tiết không phù hơp để phơi nông sản',
      content: content,
    }
  },
}