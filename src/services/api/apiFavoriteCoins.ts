import { UserFavorites } from '../../types/UserFavoriteCoins';
import supabase from './supabase';

export async function getUsersFavories() {
  // 1. Getting currently logged in user
  const {
    data: { user: currentUser },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !currentUser) {
    console.error('Auth error:' + authError);
    return {
      data: null,
      error: authError ?? new Error('Unable to authenticate user.'),
    };
  }

  // 2. Looking for users' favorites
  const { data: favorite_crypto_table, error: queryError } = (await supabase
    .from('favorite_crypto_table')
    .select()
    .eq('user_id', currentUser?.id)) as {
    data: UserFavorites | null;
    error: Error | null;
  };

  if (queryError) {
    console.error(queryError);
    return {
      data: null,
      error: queryError,
    };
  }

  return { favorite_crypto_table, error: null };
}
