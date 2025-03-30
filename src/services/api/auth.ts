import supabase from './supabase';

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data: user, error } = await supabase.auth.getUser();

  if (error) {
    console.error(error.message);
    throw new Error('There is an error with getting currently active user');
  }
  return user;
}

export async function signInWithGoogle() {
  const { data: user, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:5173/redirect',
    },
  });

  if (error) {
    console.error(error);
    throw new Error('There is an error with logining with google');
  }
  return user;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
