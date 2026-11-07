/* Sopinsya Educenter — interaksi halaman (tanpa framework). */

// Konfirmasi untuk aksi destruktif.
document.querySelectorAll('form[data-confirm]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    if (!window.confirm(form.dataset.confirm)) event.preventDefault();
  });
});

// Tombol cetak pada laporan audit.
document.querySelectorAll('[data-print]').forEach((button) => {
  button.addEventListener('click', () => window.print());
});

// Sorotan chip rating yang dipilih.
document.querySelectorAll('form input[type="radio"][name="rating"]').forEach((input) => {
  input.addEventListener('change', () => {
    input.closest('form').querySelectorAll('.chip').forEach((chip) => chip.classList.remove('on'));
    input.closest('.chip').classList.add('on');
  });
});

// ---------------------------------------------------------------
// Alur evaluasi: identitas → soal satu per satu → kirim jawaban.
// ---------------------------------------------------------------
const root = document.querySelector('.quiz-shell');

if (root) {
  const raw = document.getElementById('eval-data');
  let data = null;
  try {
    data = JSON.parse(raw?.textContent ?? 'null');
  } catch {
    data = null;
  }

  if (data) {
    const stepIdentity = document.querySelector('[data-step="identity"]');
    const stepQuiz = document.querySelector('[data-step="quiz"]');
    const stepDone = document.querySelector('[data-step="done"]');
    const identityForm = document.querySelector('[data-identity-form]');
    const identityError = document.querySelector('[data-identity-error]');
    const quizError = document.querySelector('[data-quiz-error]');
    const progressBar = document.querySelector('[data-progress]');
    const progressLabel = document.querySelector('[data-progress-label]');
    const qList = document.querySelector('[data-qlist]');
    const qText = document.querySelector('[data-qtext]');
    const qOptions = document.querySelector('[data-options]');
    const qNumber = document.querySelector('[data-q-number]');
    const qCounter = document.querySelector('[data-q-counter]');
    const prevButton = document.querySelector('[data-prev]');
    const nextButton = document.querySelector('[data-next]');
    const submitButton = document.querySelector('[data-submit]');
    const resetButton = document.querySelector('[data-reset]');

    const questions = data.questions ?? [];
    const answers = {};
    let identity = null;
    let index = 0;

    function show(step) {
      stepIdentity.hidden = step !== 'identity';
      stepQuiz.hidden = step !== 'quiz';
      stepDone.hidden = step !== 'done';
    }

    function renderList() {
      if (!qList) return;
      qList.innerHTML = '';
      questions.forEach((question, i) => {
        const li = document.createElement('li');
        li.textContent = String(i + 1);
        li.style.cssText =
          'width:30px;height:30px;display:grid;place-items:center;border-radius:8px;font-size:.8rem;font-weight:700;border:1px solid var(--line);cursor:pointer;background:' +
          (answers[question.id] ? 'var(--secondary-dark)' : '#fff') +
          ';color:' + (answers[question.id] ? '#fff' : 'var(--txt)');
        if (i === index) li.style.outline = '2px solid var(--primary)';
        li.addEventListener('click', () => {
          index = i;
          renderQuestion();
        });
        qList.appendChild(li);
      });
    }

    function updateProgress() {
      const answered = questions.filter((q) => answers[q.id]).length;
      const total = questions.length || 1;
      if (progressBar) progressBar.style.width = `${Math.round((answered / total) * 100)}%`;
      if (progressLabel) progressLabel.textContent = `${answered} dari ${questions.length} soal terjawab`;
    }

    function renderQuestion() {
      const question = questions[index];
      if (!question) return;
      if (qNumber) qNumber.textContent = String(index + 1);
      if (qCounter) qCounter.textContent = String(index + 1);
      if (qText) qText.textContent = question.text;
      if (qOptions) {
        qOptions.innerHTML = '';
        question.options.forEach((option, i) => {
          const letter = String.fromCharCode(65 + i);
          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'opt' + (answers[question.id] === letter ? ' sel' : '');
          button.innerHTML = `<span class="key">${letter}</span><span>${escapeHtml(option)}</span>`;
          button.addEventListener('click', () => {
            answers[question.id] = letter;
            qOptions.querySelectorAll('.opt').forEach((el) => el.classList.remove('sel'));
            button.classList.add('sel');
            if (quizError) quizError.hidden = true;
            renderList();
            updateProgress();
          });
          qOptions.appendChild(button);
        });
      }
      if (prevButton) prevButton.disabled = index === 0;
      if (nextButton) nextButton.disabled = index === questions.length - 1;
      renderList();
      updateProgress();
    }

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    identityForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = new FormData(identityForm);
      const fields = {
        name: String(form.get('name') ?? '').trim(),
        email: String(form.get('email') ?? '').trim(),
        phone: String(form.get('phone') ?? '').trim(),
        position: String(form.get('position') ?? '').trim(),
      };
      const missing = [];
      if (!fields.name) missing.push('nama lengkap');
      if (!fields.email) missing.push('email');
      if (!fields.phone) missing.push('nomor telepon');
      if (!fields.position) missing.push('jabatan');
      if (missing.length) {
        identityError.textContent = `Lengkapi: ${missing.join(', ')}.`;
        identityError.hidden = false;
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email)) {
        identityError.textContent = 'Format email tidak valid.';
        identityError.hidden = false;
        return;
      }
      identityError.hidden = true;
      identity = fields;
      index = 0;
      show('quiz');
      renderQuestion();
    });

    prevButton?.addEventListener('click', () => {
      if (index > 0) {
        index -= 1;
        renderQuestion();
      }
    });

    nextButton?.addEventListener('click', () => {
      if (index < questions.length - 1) {
        index += 1;
        renderQuestion();
      }
    });

    resetButton?.addEventListener('click', () => {
      Object.keys(answers).forEach((key) => delete answers[key]);
      index = 0;
      show('quiz');
      renderQuestion();
    });

    submitButton?.addEventListener('click', async () => {
      const unanswered = questions.filter((q) => !answers[q.id]);
      if (unanswered.length) {
        quizError.textContent = `Masih ada ${unanswered.length} soal yang belum dijawab. Lengkapi sebelum mengirim.`;
        quizError.hidden = false;
        index = questions.indexOf(unanswered[0]);
        renderQuestion();
        return;
      }
      if (!identity) {
        show('identity');
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = 'Mengirim…';
      quizError.hidden = true;

      try {
        const response = await fetch(data.submitUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...identity, answers }),
        });
        const body = await response.json().catch(() => null);
        if (!response.ok || !body?.success) {
          throw new Error(body?.error?.message || 'Gagal mengirim jawaban. Coba lagi.');
        }

        const result = body.data;
        show('done');
        const title = document.querySelector('[data-result-title]');
        const text = document.querySelector('[data-result-text]');
        if (title) title.textContent = 'Jawaban berhasil terkirim.';
        if (text) {
          text.textContent = result.scoreVisible
            ? `Nilai Anda ${result.percent}% (${result.score} dari ${result.maxScore} poin). Terima kasih telah mengerjakan ${data.title}.`
            : `Terima kasih, jawaban ${data.title} Anda tersimpan. Nilai Pre-test akan direkap oleh Admin dan tidak ditampilkan langsung.`;
        }
      } catch (error) {
        quizError.textContent = error.message;
        quizError.hidden = false;
        submitButton.disabled = false;
        submitButton.textContent = 'Selesai & kirim';
      }
    });

    // Minta jawaban sebelum meninggalkan halaman.
    window.addEventListener('beforeunload', (event) => {
      if (stepQuiz && !stepQuiz.hidden) {
        event.preventDefault();
        event.returnValue = '';
      }
    });
  }
}
