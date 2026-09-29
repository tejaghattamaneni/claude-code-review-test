function getSubscriptionDetails(user) {
  if (!user || typeof user !== 'object') {
    throw new Error('User is required');
  }

  const isPremium = user.isPremium === true;

  return {
    plan: isPremium ? 'premium' : 'free',
    price: isPremium ? 19.99 : 0,
    benefits: isPremium
      ? ['Unlimited todos', 'Priority support']
      : ['Basic todo management']
  };
}

module.exports = { getSubscriptionDetails };
