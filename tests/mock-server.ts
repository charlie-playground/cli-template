import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

export const mockServer = setupServer(
  http.get('https://wttr.in/:city', () => {
    return HttpResponse.json({
      current_condition: [{ temp_C: 15 }],
    });
  })
);
