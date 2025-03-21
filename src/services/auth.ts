import supabase from './api/supabase';

export async function signInWithGithub() {
  const { data: user, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });

  if (error) {
    console.error(error);
    throw new Error('There is an error with logining with github');
  }
  console.log(user);
  return user;
}
