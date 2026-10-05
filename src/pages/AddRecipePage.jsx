import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecipes } from '../context/RecipesContext.jsx'
import { CATEGORIES, DIFFICULTIES, toRecipe, validateRecipe } from '../utils/validateRecipe.js'

const empty = {
  title: '', description: '', category: 'Dinner', cuisine: '', difficulty: 'Easy',
  prepMinutes: '10', cookMinutes: '20', servings: '4', ingredients: '', steps: '', tags: '',
}

function Field({ id, label, error, hint, children }) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined
  return (
    <div className={error ? 'field has-error' : 'field'}>
      <label htmlFor={id}>{label}</label>
      {children({ id, 'aria-invalid': error ? 'true' : undefined, 'aria-describedby': describedBy })}
      {hint && !error && <small id={`${id}-hint`} className="hint">{hint}</small>}
      {error && <small id={`${id}-error`} className="error" role="alert">{error}</small>}
    </div>
  )
}

export default function AddRecipePage() {
  const { addRecipe } = useRecipes()
  const navigate = useNavigate()
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validateRecipe(values)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      document.getElementById(`r-${first}`)?.focus()
      return
    }
    const id = addRecipe(toRecipe(values))
    navigate(`/recipes/${id}`)
  }

  const bind = (name) => ({ name, value: values[name], onChange })

  return (
    <section>
      <h1>Add a recipe</h1>
      <form className="card form" onSubmit={onSubmit} noValidate>
        <Field id="r-title" label="Title" error={errors.title}>
          {(p) => <input {...p} {...bind('title')} />}
        </Field>
        <Field id="r-description" label="Short description" error={errors.description}>
          {(p) => <input {...p} {...bind('description')} />}
        </Field>
        <div className="row">
          <Field id="r-category" label="Category">
            {(p) => <select {...p} {...bind('category')}>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}</select>}
          </Field>
          <Field id="r-difficulty" label="Difficulty">
            {(p) => <select {...p} {...bind('difficulty')}>{DIFFICULTIES.map((d) => <option key={d}>{d}</option>)}</select>}
          </Field>
          <Field id="r-cuisine" label="Cuisine (optional)">
            {(p) => <input {...p} {...bind('cuisine')} />}
          </Field>
        </div>
        <div className="row">
          <Field id="r-prepMinutes" label="Prep (min)" error={errors.prepMinutes}>
            {(p) => <input {...p} {...bind('prepMinutes')} type="number" min="0" />}
          </Field>
          <Field id="r-cookMinutes" label="Cook (min)" error={errors.cookMinutes}>
            {(p) => <input {...p} {...bind('cookMinutes')} type="number" min="0" />}
          </Field>
          <Field id="r-servings" label="Servings" error={errors.servings}>
            {(p) => <input {...p} {...bind('servings')} type="number" min="1" />}
          </Field>
        </div>
        <Field id="r-ingredients" label="Ingredients" error={errors.ingredients} hint="One ingredient per line.">
          {(p) => <textarea {...p} {...bind('ingredients')} rows="6" />}
        </Field>
        <Field id="r-steps" label="Steps" error={errors.steps} hint="One step per line.">
          {(p) => <textarea {...p} {...bind('steps')} rows="6" />}
        </Field>
        <Field id="r-tags" label="Tags (optional)" hint="Comma separated, e.g. vegan, quick">
          {(p) => <input {...p} {...bind('tags')} />}
        </Field>
        <button type="submit" className="btn btn-primary">Save recipe</button>
      </form>
    </section>
  )
}
