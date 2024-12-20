import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpeechService {

  private recognition: any;
  private isRecognizing = false;
  private result = '';

  constructor(private http: HttpClient) {
    debugger
    // Check if SpeechRecognition is supported by the browser
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;

      // Event listener when speech is recognized
      this.recognition.onresult = (event: any) => {
        const transcript = event.results[event.resultIndex][0].transcript;
        this.result = transcript;
      };

      // Event listener for error handling
      this.recognition.onerror = (event: any) => {
        console.error('Speech Recognition Error:', event.error);
      };
    } else {
      console.warn('Speech Recognition API is not supported in this browser.');
    }
  }

  // Start recognition
  startRecognition(): void {
    if (this.recognition && !this.isRecognizing) {
      this.isRecognizing = true;
      this.recognition.start();
    }
  }

  // Stop recognition
  stopRecognition(): void {
    if (this.recognition && this.isRecognizing) {
      this.isRecognizing = false;
      this.recognition.stop();
    }
  }

  // Get the recognized speech text
  getRecognizedText(): string {
    return this.result;
  }

  private apiUrl = 'https://libretranslate.de/translate'; // Public instance of LibreTranslate



  translateText(text: string, targetLang: string): Observable<any> {
    const body = {
      q: text,
      source: 'en', // Source language (can be dynamic or auto-detected)
      target: targetLang, // Target language
      format: 'text', // We send plain text
    };

    return this.http.post(this.apiUrl, body);
  }

}
