"use client";

import { FormEvent, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, firebaseReady } from '@/lib/firebase';

type MovieMissionFormProps = {
  hosts: readonly string[];
};

const snacks = [
  'Buttered Popcorn',
  'Kettle Corn',
  'M&Ms',
  'Reese’s Pieces',
  'Sour Patch Kids',
  'Twizzlers',
  'Milk Duds',
  'Nachos',
  'Ice Cream',
  'Root Beer Floats',
  'Cookies',
  'Brownies'
];

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'not-configured';

export function MovieMissionForm({ hosts }: MovieMissionFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!firebaseReady || !db) {
      setStatus('not-configured');
      setMessage('Firebase is not configured yet. Mission Control needs to add the Firebase environment variables.');
      return;
    }

    setStatus('submitting');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const selectedSnacks = formData.getAll('snacks').map(String);

    const submission = {
      adventureId: 'smoky-mountain-2026',
      missionId: 'movie-mission',
      name: String(formData.get('name') || ''),
      movie: String(formData.get('movie') || ''),
      streamingService: String(formData.get('streamingService') || ''),
      reason: String(formData.get('reason') || ''),
      snacks: selectedSnacks,
      lookingForwardTo: String(formData.get('lookingForwardTo') || ''),
      createdAt: serverTimestamp()
    };

    try {
      await addDoc(collection(db, 'movieMissionSubmissions'), submission);
      form.reset();
      setStatus('success');
      setMessage('Mission accomplished! Mission Control received your movie pick.');
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Something went wrong saving your movie pick. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mission-form">
      <label>
        Who are you?
        <select name="name" required>
          <option value="">Choose your name</option>
          {hosts.map((host) => (
            <option value={host} key={host}>{host}</option>
          ))}
        </select>
      </label>

      <label>
        What movie do you want to host?
        <input name="movie" type="text" placeholder="Movie title" required />
      </label>

      <label>
        Where can we watch it?
        <select name="streamingService" required>
          <option value="">Choose one</option>
          <option>Netflix</option>
          <option>Disney+</option>
          <option>Hulu</option>
          <option>Max</option>
          <option>Prime Video</option>
          <option>Apple TV+</option>
          <option>Peacock</option>
          <option>Paramount+</option>
          <option>DVD / Blu-ray</option>
          <option>I don't know</option>
        </select>
      </label>

      <label>
        Why did you pick it?
        <textarea name="reason" rows={4} placeholder="Optional, but encouraged!" />
      </label>

      <fieldset>
        <legend>Favorite movie snacks</legend>
        {snacks.map((snack) => (
          <label className="checkbox" key={snack}>
            <input type="checkbox" name="snacks" value={snack} />
            <span>{snack}</span>
          </label>
        ))}
      </fieldset>

      <label>
        The thing I’m looking forward to most is...
        <textarea name="lookingForwardTo" rows={4} placeholder="Tell Mission Control what you’re excited about." />
      </label>

      <button className="primary" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting...' : 'Submit Movie Mission'}
      </button>

      {message && (
        <p className={status === 'success' ? 'form-success' : 'form-error'}>
          {status === 'success' ? '✅ ' : '⚠️ '}
          {message}
        </p>
      )}
    </form>
  );
}
