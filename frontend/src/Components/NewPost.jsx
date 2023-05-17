import { AttachFile, Close, EmojiEmotions, Image, Link } from '@mui/icons-material'
import { TextField } from '@mui/material'
import EmojiPicker from 'emoji-picker-react'
import * as React from 'react'

export default function NewPost({ ...props }) {
  const [searchUserQuery, setSearchUserQuery] = React.useState('')
  const [footerShow, setFooterShow] = React.useState('')
  const [form, setForm] = React.useState({
    points: 30,
    recipients: [],
    hashtags: [],
    message: '',
    image: null,
    link: '',
  })

  const users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      id: 2,
      firstName: 'Lisa',
      lastName: 'Clinton',
    },
    {
      id: 3,
      firstName: 'Neha',
      lastName: 'Bhati',
    },
  ]

  const hashtags = ['OneTeam', 'TeamBuilding', 'Vision', 'Culture', 'Training']

  const user = {
    points: 260,
  }

  const searchedUser = users.filter((user) =>
    JSON.stringify(user).toLocaleLowerCase().includes(searchUserQuery)
  )
  const emptyRows = Math.max(0, 5 - searchedUser.length)
  const USER_BTN_HEIGHT = 28

  React.useEffect(() => {
    document.addEventListener('click', (ev) => {
      const footerShowElm = document.querySelector('#footerShow')
      const footerElm = document.querySelector('#new-post-footer')

      if (!footerShowElm.contains(ev.target) && !footerElm.contains(ev.target)) {
        setFooterShow('')
      }
    })
  }, [])

  return (
    <div className="">
      <div className="bg-primary text-white text-sm rounded-t-lg py-2 px-4">
        <ul className="flex items-center divide-x">
          {/* points button */}

          <li className="group px-4">
            <span>+ Points</span>
            <div className="p-2 rounded-full absolute shadow bg-white text-black gap-2 hidden group-hover:flex">
              {[10, 20, 30, 40, 50].map((point) => (
                <button
                  key={point}
                  type="button"
                  className={`w-7 h-7 flex items-center justify-center rounded-full hover:bg-primary  hover:text-white ${
                    form.points === point ? 'bg-primary text-white' : ''
                  }`}
                  onClick={() => {
                    setForm((prev) => ({ ...prev, points: point }))
                  }}
                >
                  {point}
                </button>
              ))}
            </div>
          </li>

          <li className="group px-4">
            <span className="">@ Recipients</span>

            <div className="absolute shadow rounded divide-y bg-white text-black hidden group-hover:block">
              {searchedUser.map((user) => {
                const checked = form.recipients.findIndex((x) => x.id === user.id) !== -1
                return (
                  <button
                    style={{ height: USER_BTN_HEIGHT }}
                    className={`w-full block px-4 py-1 text-left ${
                      checked ? 'bg-translucent' : ''
                    }`}
                    key={user.id}
                    type="button"
                    onClick={() => {
                      setForm((prev) => {
                        const checked = form.recipients.findIndex((x) => x.id === user.id) !== -1
                        if (checked) {
                          prev.recipients = prev.recipients.filter((x) => x.id !== user.id)
                        } else {
                          prev.recipients.push(user)
                        }

                        return { ...prev }
                      })
                    }}
                  >
                    {user.firstName} {user.lastName}
                  </button>
                )
              })}

              {emptyRows && (
                <button
                  disabled
                  style={{ height: USER_BTN_HEIGHT * emptyRows }}
                  className={`w-full block px-4 py-1`}
                >
                  &nbsp;
                </button>
              )}

              <input
                className="bg-translucent py-1 px-2"
                onChange={(e) => setSearchUserQuery(e.target.value)}
                placeholder="Search @Recipient"
                value={searchUserQuery}
              />
            </div>
          </li>

          <li className="group px-4">
            <span># Hashtag</span>
            <div className="absolute bg-white shadow text-black flex-col rounded divide-y hidden group-hover:flex">
              {hashtags.map((tag, i) => {
                const checked = form.hashtags.includes(tag)
                return (
                  <button
                    key={tag}
                    type="button"
                    className={`text-left px-4 py-1 ${checked ? 'bg-translucent' : ''}`}
                    onClick={() => {
                      setForm((prev) => {
                        const checked = prev.hashtags.includes(tag)
                        if (checked) {
                          prev.hashtags = prev.hashtags.filter((x) => x !== tag)
                        } else {
                          prev.hashtags.push(tag)
                        }

                        return { ...prev }
                      })
                    }}
                  >
                    #{tag}
                  </button>
                )
              })}
            </div>
          </li>

          <li style={{ borderWidth: 0 }} className="ml-auto">
            You Have {user.points} points to give
            <span className="relative group ml-2 w-4 h-4 bg-white text-black inline-flex items-center justify-center rounded-full">
              <span>?</span>

              <p className="-translate-x-1/4 top-full w-52 bg-white shadow p-2 rounded z-20 absolute hidden group-hover:block">
                You monthly allowance will refresh on 1st March. You have 6 days to spend 160
                points.
              </p>
            </span>
          </li>
        </ul>
      </div>

      {/* text field */}
      <div className="bg-white px-8 py-10 text-gray-400">
        <div>
          +{form.points}{' '}
          {form.recipients.map((user) => (
            <button key={user.id} type="button">
              @{user.firstName} {user.lastName}
            </button>
          ))}{' '}
          {form.hashtags.map((tag) => (
            <button key={tag} type="button">
              #{tag}
            </button>
          ))}
        </div>

        <div className="border-b focus-within:border-primary focus-within:border-b">
          <textarea
            spellCheck={false}
            className="resize-none h-20 block w-full outline-none  transition-all"
            placeholder="Type Here..."
            onChange={(ev) =>
              setForm((prev) => ({ ...prev, message: ev.target.value.substring(0, 270) }))
            }
            value={form.message}
          ></textarea>

          {form.image && (
            <div>
              <img
                src={URL.createObjectURL(form.image)}
                key={form.image}
                className="mt-4 w-40 border"
              />
            </div>
          )}

          {form.link && (
            <div>
              <p>URL Link:</p>

              <div className="group flex items-center">
                <a className="text-primary underline" href={form.link}>
                  {form.link}
                </a>
                <button
                  className="hidden group-hover:inline-block ml-4"
                  onClick={() => setForm((prev) => ({ ...prev, link: '' }))}
                >
                  <Close fontSize="10" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* footer */}
        <div id="new-post-footer" className="flex pt-3 gap-4">
          <button type="button" onClick={() => setFooterShow('emoji')}>
            <EmojiEmotions />
          </button>

          <label className="cursor-pointer">
            <Image />
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={(ev) => {
                setForm((prev) => ({
                  ...prev,
                  image: ev.target.files[0],
                }))
              }}
            />
          </label>

          <label className="cursor-pointer">
            <AttachFile />

            <input hidden type="file" multiple />
          </label>

          <button onClick={(ev) => setFooterShow('link')}>
            <Link />
          </button>

          <button
            type="submit"
            className=" ml-auto bg-primary text-white px-4 w-full max-w-[6rem] rounded-sm"
          >
            Give
          </button>

          {footerShow === 'emoji' ? (
            <div id="footerShow" className="absolute z-10">
              <EmojiPicker
                onEmojiClick={(emoji) => {
                  setForm((prev) => ({ ...prev, message: prev.message + emoji.emoji }))
                  setFooterShow('')
                }}
              />
            </div>
          ) : footerShow === 'link' ? (
            <div
              id="footerShow"
              className="absolute z-10 translate-y-8 bg-white border border-translucent shadow p-4 rounded"
            >
              <form
                onSubmit={(ev) => {
                  ev.preventDefault()
                  setFooterShow('')
                }}
              >
                <label className="text-sm">URL Link</label>
                <input
                  className="mt-1 w-full block bg-translucent p-2 rounded"
                  placeholder="http://"
                  onChange={(ev) => setForm((prev) => ({ ...prev, link: ev.target.value }))}
                />

                <button className="w-full block bg-primary rounded text-white mt-2">OK</button>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
